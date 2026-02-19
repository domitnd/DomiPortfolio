// ===== GPA CALCULATOR LOGIC =====

document.addEventListener('DOMContentLoaded', function() {
    const coursesContainer = document.getElementById('courses-container');
    const addCourseBtn = document.getElementById('add-course-btn');
    const calculateBtn = document.getElementById('calculate-gpa-btn');
    const resetBtn = document.getElementById('reset-courses-btn');
    
    // Initial courses (2 default courses)
    function initializeCourses() {
        coursesContainer.innerHTML = '';
        addCourseRow('advanced Web Development', 15, 19);
        addCourseRow('data structure & Algorithms', 20, 19);
    }
    
    // Add a new course row
    function addCourseRow(courseName = '', credits = 10, mark = 10) {
        const row = document.createElement('div');
        row.className = 'course-row';
        row.innerHTML = `
            <input type="text" class="course-input course-name" placeholder="Course Name" value="${courseName}">
            <input type="number" class="course-input credits" placeholder="Credits" value="${credits}" min="10" max="20" step="5">
            <input type="number" class="course-input mark" placeholder="Mark (0-20)" value="${mark}" min="0" max="20" step="0.1">
            <button class="remove-course" title="Remove course">✕</button>
        `;
        
        // Add remove functionality
        row.querySelector('.remove-course').addEventListener('click', function() {
            if (document.querySelectorAll('.course-row').length > 1) {
                row.remove();
            } else {
                alert('You need at least one course!');
            }
        });
        
        coursesContainer.appendChild(row);
    }
    
    // Validate inputs
    function validateInputs() {
        const rows = document.querySelectorAll('.course-row');
        let isValid = true;
        
        rows.forEach(row => {
            const credits = parseFloat(row.querySelector('.credits').value);
            const mark = parseFloat(row.querySelector('.mark').value);
            
            if (isNaN(credits) || credits <10 || credits >20) {
                isValid = false;
                row.querySelector('.credits').style.borderColor = 'red';
            } else {
                row.querySelector('.credits').style.borderColor = '';
            }
            
            if (isNaN(mark) || mark < 0 || mark > 20) {
                isValid = false;
                row.querySelector('.mark').style.borderColor = 'red';
            } else {
                row.querySelector('.mark').style.borderColor = '';
            }
        });
        
        return isValid;
    }
    
    // Calculate GPA
    function calculateGPA() {
        if (!validateInputs()) {
            alert('Please fix invalid inputs (Credits: 1-10, Marks: 0-20)');
            return;
        }
        
        const rows = document.querySelectorAll('.course-row');
        let totalCredits = 0;
        let weightedSum = 0;
        
        rows.forEach(row => {
            const credits = parseFloat(row.querySelector('.credits').value);
            const mark = parseFloat(row.querySelector('.mark').value);
            
            totalCredits += credits;
            weightedSum += mark * credits;
        });
        
        const averageMark = weightedSum / totalCredits;
        const gpa = (averageMark / 20) * 5; // Scale to 5.0
        
        // Determine grade classification
        let grade = '';
        let gradeColor = '';
        
        if (averageMark >= 16) {
            grade = 'A (Excellent)';
            gradeColor = '#4caf50';
        } else if (averageMark >= 14) {
            grade = 'B (Good)';
            gradeColor = '#2196F3';
        } else if (averageMark >= 10) {
            grade = 'C (Satisfactory)';
            gradeColor = '#ff9800';
        } else {
            grade = 'F (Fail - Need Improvement)';
            gradeColor = '#f44336';
        }
        
        // Update display
        document.getElementById('gpa-value').textContent = gpa.toFixed(2);
        document.getElementById('grade-classification').textContent = grade;
        document.getElementById('grade-classification').style.color = gradeColor;
        document.getElementById('total-credits').textContent = totalCredits;
        document.getElementById('average-mark').textContent = averageMark.toFixed(2);
    }
    
    // Reset all courses
    function resetCourses() {
        if (confirm('Reset all courses? This will clear your data.')) {
            initializeCourses();
        }
    }
    
    // Event Listeners
    addCourseBtn.addEventListener('click', () => addCourseRow('', 3, 10));
    calculateBtn.addEventListener('click', calculateGPA);
    resetBtn.addEventListener('click', resetCourses);
    
    // Initialize
    initializeCourses();
});