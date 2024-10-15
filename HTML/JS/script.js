document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('serv1');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    function togglediv() {
        if (overlay.style.display === "none" || overlay.style.display === "") {
            overlay.style.display = "block";
            document.body.classList.add('blurred');
        } else {
            overlay.style.display = "none";
            document.body.classList.remove('blurred');
        }
    }
    toggleBtn.addEventListener('click', togglediv);
    closeBtn.addEventListener('click', togglediv);
});
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('serv2');
    const overlay = document.getElementById('overlay2');
    const closeBtn = document.getElementById('closeBtn2');

    function togglediv() {
        if (overlay.style.display === "none" || overlay.style.display === "") {
            overlay.style.display = "block";
            document.body.classList.add('blurred');
        } else {
            overlay.style.display = "none";
            document.body.classList.remove('blurred');
        }
    }
    toggleBtn.addEventListener('click', togglediv);
    closeBtn.addEventListener('click', togglediv);
});
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('serv3');
    const overlay = document.getElementById('overlay3');
    const closeBtn = document.getElementById('closeBtn3');

    function togglediv() {
        if (overlay.style.display === "none" || overlay.style.display === "") {
            overlay.style.display = "block";
            document.body.classList.add('blurred');
        } else {
            overlay.style.display = "none";
            document.body.classList.remove('blurred');
        }
    }
    toggleBtn.addEventListener('click', togglediv);
    closeBtn.addEventListener('click', togglediv);
});
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('plan1');
    const overlay = document.getElementById('form1');
    const closeBtn = document.getElementById('closeBtn4');
    const GetWorkout = document.getElementById('submitBtn');

    function togglediv() {
        if (overlay.style.display === "none" || overlay.style.display === "") {
            overlay.style.display = "block";
            document.body.classList.add('blurred');
        } else {
            overlay.style.display = "none";
            document.body.classList.remove('blurred');
        }
    }
    toggleBtn.addEventListener('click', togglediv);
    closeBtn.addEventListener('click', togglediv);
});
function planPage() {
    document.body.classList.add('fade-out');
    setTimeout(function() {
      window.location.href = "pro.html";
    }, 1000); // match the duration in your CSS
  }
  document.addEventListener('DOMContentLoaded', function() {
    const scrollToBottom = document.getElementById('scrollToBottom');
    if (scrollToBottom) {
        scrollToBottom.addEventListener('click', function() {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        });
    }
});
window.onload = function () {
    window.scrollTo(0, 0); // Scroll to the top of the page
};
function signUp(){
    document.body.classList.add('fade-out');
    setTimeout(function() {
      window.location.href = "signup.html";
    }, 1000);
}