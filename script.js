

document.addEventListener('DOMContentLoaded', function () {
  const productLinks = document.querySelectorAll('.product a');

  productLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      alert('Redirecting to menu page to order: ' + this.previousElementSibling.previousElementSibling.textContent);
    });
  });

  const rewardLink = document.querySelector('.reward a');
  if (rewardLink) {
    rewardLink.addEventListener('click', function () {
      alert('Check out all reward deals on the rewards page!');
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); 

      alert("Thank you for your order! We’ll process it shortly.");
      form.reset(); 
    });
  }
});

function showDownloadPopup() {
  document.getElementById('downloadPopup').style.display = 'flex';
}

function closeDownloadPopup() {
  document.getElementById('downloadPopup').style.display = 'none';
}

// Optional: close popup on clicking outside content
window.onclick = function(event) {
  const popup = document.getElementById('downloadPopup');
  if (event.target === popup) {
    popup.style.display = 'none';
  }
};
