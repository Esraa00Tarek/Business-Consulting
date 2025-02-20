document.addEventListener('DOMContentLoaded', function() {
    var newsletterForm = document.querySelector('.newsletter-form');
    if(newsletterForm){
      newsletterForm.addEventListener('submit', function(e) {
            var emailInput = newsletterForm.querySelector('input[type="email"]');
            if (!emailInput.value.trim()) {
                e.preventDefault();
                alert('Please enter your email.');
                return;
            }
             var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                e.preventDefault();
                alert('Please enter a valid email address.');
                 return;
            }
             alert('Thank you for subscribing!');
        });
    }
  
  
     var customerReviewSection = document.querySelector('.customer-reviews');
      if(customerReviewSection){
        var reviews = [
         {
              text: "This has been an incredible experience. We really liked the results!",
              author: "Anna, CEO @shopify"
          },
         {
              text: "We couldn't find any better agency then this one! Very professional and delivered in time.",
              author: "Mark, CEO @meta"
          },
          {
              text: "A very collaborative team that helped us achieve our goals!",
              author: "Jane, CEO @twitter"
          }
        ];
       let currentReviewIndex = 0;
        var reviewItem = customerReviewSection.querySelector('.review-item');
          function loadNewReview() {
             setTimeout(() => {
                  currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
               reviewItem.querySelector('p').textContent = reviews[currentReviewIndex].text;
                reviewItem.querySelector('.testimonial-author').textContent = reviews[currentReviewIndex].author;
                loadNewReview(); 
             }, 5000); 
          }
          loadNewReview();
      }
  });