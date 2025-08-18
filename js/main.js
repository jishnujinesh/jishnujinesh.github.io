// Time-based greeting
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting;
    
    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    
    document.getElementById('greeting').textContent = greeting + " Welcome to my portfolio.";
}

document.addEventListener('DOMContentLoaded', updateGreeting);


// In main.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        // Basic email validation
        if (!email.includes('@') || !email.includes('.')) {
            document.getElementById('formFeedback').textContent = 'Please enter a valid email address.';
            return;
        }
        
        document.getElementById('formFeedback').textContent = 'Message sent successfully!';
        // In a real application, you would send this data to a server
        this.reset();
    } else {
        document.getElementById('formFeedback').textContent = 'Please fill in all fields.';
    }
});


$(document).ready(function() {
    const projects = {
        project1: {
            title: "Project One",
            image: "images/project1-full.jpg",
            description: "Description of project one..."
        },
        project2: {
            title: "Project Two",
            image: "images/project2-full.jpg",
            description: "Description of project two..."
        }
    };
    
    $('.thumbnail').click(function() {
        const projectId = $(this).data('project');
        const project = projects[projectId];
        
        $('#project-title').text(project.title);
        $('#project-image').attr('src', project.image).attr('alt', project.title);
        $('#project-description').text(project.description);
    });
});
