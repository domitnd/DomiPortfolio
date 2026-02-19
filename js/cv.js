// ===== CV UPLOAD AND DOWNLOAD FUNCTIONALITY =====

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('cv-upload');
    const downloadBtn = document.getElementById('downloadCvBtn');
    const cvFileName = document.getElementById('cvFileName');
    const cvFileSize = document.getElementById('cvFileSize');
    const cvLastUpdated = document.getElementById('cvLastUpdated');
    const cvFileInfo = document.getElementById('cvFileInfo');
    const cvPreviewContainer = document.getElementById('cvPreviewContainer');
    const cvPreviewFrame = document.getElementById('cvPreviewFrame');

    // Key for localStorage
    const CV_STORAGE_KEY = 'dominique_cv_data';
    const CV_METADATA_KEY = 'dominique_cv_metadata';

    // Load saved CV on page load
    loadSavedCV();

    // Drag and drop functionality
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        uploadArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, unhighlight, false);
    });

    function highlight() {
        uploadArea.classList.add('dragover');
    }

    function unhighlight() {
        uploadArea.classList.remove('dragover');
    }

    // Handle dropped files
    uploadArea.addEventListener('drop', handleDrop, false);
    uploadArea.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileSelect);

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    }

    function handleFileSelect(e) {
        const files = e.target.files;
        handleFiles(files);
    }

    function handleFiles(files) {
        if (files.length > 0) {
            const file = files[0];
            
            // Validate file type
            const validTypes = ['application/pdf', 'application/msword', 
                              'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            
            if (!validTypes.includes(file.type)) {
                showUploadMessage('Please upload a PDF or Word document', 'error');
                return;
            }

            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                showUploadMessage('File size must be less than 5MB', 'error');
                return;
            }

            // Read and save the file
            readAndSaveFile(file);
        }
    }

    function readAndSaveFile(file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Save file data to localStorage
            const cvData = {
                fileName: file.name,
                fileType: file.type,
                fileSize: file.size,
                fileContent: e.target.result, // Base64 encoded
                lastUpdated: new Date().toISOString()
            };
            
            localStorage.setItem(CV_STORAGE_KEY, JSON.stringify(cvData));
            
            // Save metadata separately for quick access
            const metadata = {
                fileName: file.name,
                fileSize: file.size,
                lastUpdated: new Date().toISOString()
            };
            localStorage.setItem(CV_METADATA_KEY, JSON.stringify(metadata));
            
            // Update UI
            updateCVDisplay(metadata);
            enableDownload(cvData);
            
            // Show success message
            showUploadMessage('CV uploaded successfully!', 'success');
            
            // Reset file input
            fileInput.value = '';
        };
        
        reader.readAsDataURL(file); // Read as base64 for storage
    }

    function loadSavedCV() {
        const metadata = localStorage.getItem(CV_METADATA_KEY);
        const cvData = localStorage.getItem(CV_STORAGE_KEY);
        
        if (metadata && cvData) {
            try {
                const metadataObj = JSON.parse(metadata);
                const cvDataObj = JSON.parse(cvData);
                
                updateCVDisplay(metadataObj);
                enableDownload(cvDataObj);
                
                // Show preview if it's a PDF
                if (cvDataObj.fileType === 'application/pdf') {
                    showPDFPreview(cvDataObj.fileContent);
                }
            } catch (e) {
                console.error('Error loading saved CV:', e);
                resetCVDisplay();
            }
        } else {
            resetCVDisplay();
        }
    }

    function updateCVDisplay(metadata) {
        if (cvFileName) {
            cvFileName.textContent = metadata.fileName;
        }
        
        if (cvFileSize) {
            const sizeInKB = (metadata.fileSize / 1024).toFixed(2);
            cvFileSize.textContent = `Size: ${sizeInKB} KB`;
        }
        
        if (cvLastUpdated) {
            const date = new Date(metadata.lastUpdated);
            const formattedDate = date.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            cvLastUpdated.textContent = `Last updated: ${formattedDate}`;
        }
        
        // Update admin section
        if (cvFileInfo) {
            cvFileInfo.innerHTML = `
                <span class="cv-file-present">📄 ${metadata.fileName}</span>
                <small>Uploaded: ${new Date(metadata.lastUpdated).toLocaleDateString()}</small>
            `;
        }
    }

    function enableDownload(cvData) {
        downloadBtn.disabled = false;
        
        // Remove previous event listeners
        const newDownloadBtn = downloadBtn.cloneNode(true);
        downloadBtn.parentNode.replaceChild(newDownloadBtn, downloadBtn);
        
        // Add new event listener
        newDownloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create download link
            const link = document.createElement('a');
            link.href = cvData.fileContent;
            link.download = cvData.fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Show download message
            showUploadMessage('Download started!', 'success');
        });
    }

    function showPDFPreview(base64Content) {
        if (cvPreviewContainer && cvPreviewFrame) {
            cvPreviewContainer.style.display = 'block';
            
            // Create an iframe for PDF preview
            const iframe = document.createElement('iframe');
            iframe.src = base64Content;
            iframe.style.width = '100%';
            iframe.style.height = '500px';
            iframe.style.border = 'none';
            iframe.style.borderRadius = '20px';
            
            cvPreviewFrame.innerHTML = '';
            cvPreviewFrame.appendChild(iframe);
        }
    }

    function resetCVDisplay() {
        if (cvFileName) {
            cvFileName.textContent = 'No CV uploaded';
        }
        
        if (cvFileSize) {
            cvFileSize.textContent = '—';
        }
        
        if (cvLastUpdated) {
            cvLastUpdated.textContent = 'Last updated: Not available';
        }
        
        downloadBtn.disabled = true;
        
        if (cvFileInfo) {
            cvFileInfo.innerHTML = '<span class="no-cv">No CV uploaded yet</span>';
        }
        
        if (cvPreviewContainer) {
            cvPreviewContainer.style.display = 'none';
        }
    }

    function showUploadMessage(message, type) {
        // Remove any existing message
        const existingMessage = document.querySelector('.upload-success');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = 'upload-success';
        messageEl.style.background = type === 'success' ? '#4caf50' : '#f44336';
        messageEl.textContent = message;
        
        document.body.appendChild(messageEl);
        
        // Remove after 3 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 3000);
    }

    // Optional: Add a button to clear CV (for testing)
    // You can remove this in production
    const clearBtn = document.createElement('button');
    clearBtn.className = 'btn-secondary';
    clearBtn.textContent = 'Clear CV (Admin)';
    clearBtn.style.marginTop = '1rem';
    clearBtn.addEventListener('click', function() {
        if (confirm('Clear uploaded CV? This is for testing.')) {
            localStorage.removeItem(CV_STORAGE_KEY);
            localStorage.removeItem(CV_METADATA_KEY);
            resetCVDisplay();
            showUploadMessage('CV cleared', 'success');
        }
    });
    
    // Add clear button to admin section (optional)
    const adminSection = document.getElementById('admin-section');
    if (adminSection) {
        adminSection.appendChild(clearBtn);
    }
});