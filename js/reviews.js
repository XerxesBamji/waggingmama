const reviewsData = [
  { name: "Sheila Harrison", date: "2025-11-15", initial: "S", content: "Chloe (our dog) stayed with Amanda during our weeks holiday. Following a great meet and greet Amanda and her family welcomed Chloe into their home. We received lots of videos and photos which were very reassuring as Chloe seemed to be having a great time. Amanda went over and above when Chloe’s colitis flared and looked after her just as we would, which meant her tummy settled quickly. Amanda and her family clearly love dogs and I would have no hesitation in recommending them." },
  { name: "Lowri Morgan", date: "2025-05-15", initial: "L", content: "Amanda has looked after Autumn for us on a couple of occasions and I know that she is having the best time and lots of fun with their dog and also the dogs which Amanda walks regularly. I receive lots of videos and photos and reports of how she is doing and I can totally relax being away knowing Autumn is having the best time! When she comes back home, she is shattered and I think she is probably really missing Coco and the fun of their home’. Highly recommend!" },
  { name: "Alex Meah", date: "2025-10-20", initial: "A", content: "Amanda is amazing! Our dog absolutely loves her and thoroughly enjoys the walks (and we love watching Amanda’s videos of him zooming around!). We know he is in safe hands as she shows such care for the dogs in all that she does. She’s also very flexible when we have to add extra walks in due to work commitments. Couldn’t be without her!" },
  { name: "Sarah Butler", date: "2025-10-19", initial: "S", content: "Amanda has been walking my dog Willow for a few months now, and I couldn't be happier with the care and attention she gets. Willow gets so excited when Amanda comes to collect her, and it’s clear they’ve built a great bond. I recently used Amanda for boarding for a few days and received lots of updates and photos, which gave me peace of mind that Willow was having fun. I highly recommend Wagging Mama to anyone looking for a trustworthy, kind, and dependable dog walker / boarder." },
  { name: "Carys Kimish", date: "2025-10-18", initial: "C", content: "Wagging Mama aka Amanda is amazing. Our dog Sully is so excited to see her when she arrives to take him on his walks, it's so nice to see. And whenever we leave Sully with her and the family for a sleepover, I'm so happy as I know Sully becomes a part of the family when he's with them! I know he's in safe hands with her. Amanda has also been a lifesaver a few times with last minute stays due to work and life being hectic, I don't know where we'd be without her!! If you need a dog walker or a dog sitter, I couldn't recommend her highly enough. She's a gem!" },
  { name: "Georgina Kemp Walker (Georgie)", date: "2025-10-17", initial: "G", content: "Amanda is a great dog walker! My black lab loves her and her family and is always eager to go out with her. He mixes with a variety of dogs and Amanda manages all the different personalities really well. She shares regular videos and keeps you up to date with any timing changes. We've also boarded our lab with Amanda and he's really happy there." },
  { name: "Debbie Pringle", date: "2025-10-16", initial: "D", content: "Jasper absolutely loves Amanda!! He is so excited to see her! He seems to know when she's coming, and sits on the stairs patiently wait for her to arrive! I swear he loves her more than me!! Amanda is an absolute godsend and I can highly recommend her." },
  { name: "Tara Garmston", date: "2025-10-15", initial: "T", content: "Absolutely love Amanda and so does our dog. She has worked with us and him when from when he was a mischievous pup. He gets so excited to go with her and you can see the love between them xx" },
  { name: "Julia Richardson", date: "2024-05-15", initial: "J", content: "Amanda is amazing!! So glad we found her. She's such a wonderful person, who my dog Honey absolutely adores. She loved her from their first meeting. When Amanda walks Honey, I know she is in the safest possible hands and I never have any concerns. If you ever need a dog walker try Wagging Mama, you won't be disappointed. Honey also stayed with Amanda and her family when we went on holiday, she was so well looked after. It's nice to go away and have total peace of mind. 🥰💞🐶" },
  { name: "Hazel James", date: "2022-05-20", initial: "H", content: "Amanda has been amazing for us and our new puppy. No longer have to worry about her being on her own as she has a lovely walk and is meeting some lovely new friends which is exactly what I told Amanda was important for me. Amanda has my puppy so she has company in the day when I'm in work, and she works hard to fit into our schedule so she isn't on her own for long periods. Cant thank her enough, she's part of my puppies family now!" },
  { name: "Vicci Rose (Vic)", date: "2025-05-10", initial: "V", content: "‘Amanda really helped Lenny feel at ease and definitely at home whilst we were away on holiday. He was able to enjoy all his creature comforts and went on a variety of walks everyday. It really helped us relax and enjoy our break, knowing he was being well looked after and cared for. We would sincerely recommend Wagging Mama for home boarding and dog walking. ’" },
  { name: "Nina Jones", date: "2022-05-19", initial: "N", content: "From the first walk she went on, Roxy felt completely comfortable with Amanda at Wagging Mama and continues to get so excited when she knows she going out on a walk with her. Amanda is responsive, reliable, adaptable and you can tell she genuinely cares about dogs which is all you could hope for when leaving your dog in the care of someone else. Roxy adores her! Highly recommend." },
  { name: "Sophie Wood", date: "2022-05-18", initial: "S", content: "Wagging Mama is an absolutely incredible service! With working from home, I wanted to get Barney socialised with other dogs, and tired out. Amanda sorts out weekly times for the pup and on occasion has dealt with some very last minute requests. Barney has learnt loads with Amanda, his recall has improved and he’s so well behaved around other dogs. He knows exactly when Amanda comes and is so excited to go. I love watching the videos and seeing the photos Amanda manages to snap on their walks, and see them have an amazing time. I requested to get Barney more familiar with children, and Amanda suggested a school pick up, he is such a delight around children because of this. Highly recommend Wagging Mama!" },
  { name: "Chloe Bentley", date: "2023-05-15", initial: "C", content: "Wagging mama has been walking my puppy since she was three months. I can relax knowing she’s well taken care of, enjoying herself and being exercised. Amanda always goes above and beyond for the dogs to make sure they are happy." },
  { name: "christopher ogden", date: "2022-05-17", initial: "C", content: "The care that Amanda shows towards the dogs and their owners is wonderful. Nothing is too much trouble. Very trustworthy and friendly when popping in to get my dog for a walk from my elderly parents. It is also a credit to Amanda that Harry’s behaviour has improve since joining her dog walks . Highly recommend" },
  { name: "hayley baker", date: "2022-05-16", initial: "H", content: "Amanda is absolutely fantastic with my girls. she is always so lovely. highly recommend her to anyone who needs a dog walker or sitter x" },
  { name: "Zoe Buckeridge", date: "2022-05-15", initial: "Z", content: "Would absolutely recommend Amanda, our 2 boys absolutely love their adventures with her and all the doggy gang. Before she's even come to the door, the boys are waiting excitedly to see her." },
  { name: "Sian-Ady Long", date: "2022-05-14", initial: "S", content: "My dog absolutely loves her walks with Wagging Mama. She is reliable, professional and always tries her best to accommodate. Would highly recommend her services" },
  { name: "Deborah Reynolds", date: "2022-05-13", initial: "D", content: "Freddie the westie loves the service, he even sits in the front! Seat belt on of course." },
  { name: "Lisa Webber", date: "2022-05-12", initial: "L", content: "Amanda is excellent with my EB and would highly recommend ❤" }
];

function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  
  let monthsDiff = (now.getFullYear() - date.getFullYear()) * 12 + (now.getMonth() - date.getMonth());
  if (now.getDate() < date.getDate()) {
    monthsDiff--;
  }
  
  if (monthsDiff < 1) return "just now";
  if (monthsDiff < 12) return `${monthsDiff} month${monthsDiff > 1 ? 's' : ''} ago`;
  
  const yearsDiff = Math.floor(monthsDiff / 12);
  if (yearsDiff === 1) return "a year ago";
  return `${yearsDiff} years ago`;
}

document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.getElementById('reviews-slider');
  const sliderDotsContainer = document.getElementById('slider-dots');
  const sliderCounter = document.getElementById('slider-counter');
  let dots = [];

  if (!sliderContainer) return;

  // Disable scroll anchoring to prevent jumping bugs
  sliderContainer.style.overflowAnchor = 'none';

  // Sort reviews by date descending (newest first)
  const sortedReviews = [...reviewsData].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Clone the array to create 3 sets for infinite scrolling
  const infiniteReviews = [...sortedReviews, ...sortedReviews, ...sortedReviews];
  const setSize = sortedReviews.length;

  // Generate HTML for each review
  infiniteReviews.forEach((review, index) => {
    // The actual visual index maps to 0-19
    const actualIndex = index % setSize;
    const bgClass = actualIndex % 2 === 0 ? 'bg-sage-pale' : 'bg-pink-pale';
    const textClass = actualIndex % 2 === 0 ? 'text-sage-dark' : 'text-pink-dark';

    const card = document.createElement('div');
    card.className = 'review-card snap-center shrink-0 testimonial-card flex flex-col justify-between';
    card.style.scrollSnapAlign = 'center';
    card.dataset.index = actualIndex;

    card.innerHTML = `
      <div>
        <div class="mb-4 mt-2">
          <span class="star">★★★★★</span>
        </div>
        ${review.content ? `<p class="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-5" title="${review.content.replace(/"/g, '&quot;')}">"${review.content}"</p>` : ''}
      </div>
      <div class="flex items-center gap-3 mt-auto pt-4">
        <div class="w-10 h-10 rounded-full ${bgClass} flex items-center justify-center font-bold ${textClass}">
          ${review.initial}
        </div>
        <div>
          <div class="font-semibold text-sm">${review.name}</div>
          <div class="text-xs text-gray-400">${timeAgo(review.date)}</div>
        </div>
      </div>
    `;

    sliderContainer.appendChild(card);

    // Only add dots for the first set (we just map them logically to actualIndex)
    if (index < setSize && sliderDotsContainer) {
      const dot = document.createElement('button');
      dot.className = `w-2 h-2 rounded-full transition-all ${actualIndex === 0 ? 'bg-sage scale-125' : 'bg-gray-300 hover:bg-sage-light'}`;
      dot.setAttribute('aria-label', `Go to review ${actualIndex + 1}`);
      dot.addEventListener('click', () => {
        // Jump to the corresponding card in the middle set (set 1)
        const targetIndex = setSize + actualIndex;
        const targetCard = sliderContainer.children[targetIndex];
        if (targetCard) {
          const containerRect = sliderContainer.getBoundingClientRect();
          const targetRect = targetCard.getBoundingClientRect();
          sliderContainer.scrollBy({ left: targetRect.left - containerRect.left - (window.innerWidth >= 768 ? 40 : 16), behavior: 'smooth' });
        }
      });
      sliderDotsContainer.appendChild(dot);
      dots.push(dot);
    }
  });

  const getCardWidthAndGap = () => {
    const cardWidth = sliderContainer.querySelector('.review-card').offsetWidth;
    const gap = window.innerWidth >= 768 ? 24 : 16;
    return cardWidth + gap;
  };

  // Center the slider on the middle set initially
  setTimeout(() => {
    sliderContainer.classList.remove('scroll-smooth');
    const offset = getCardWidthAndGap();
    sliderContainer.scrollLeft = setSize * offset;
    void sliderContainer.offsetWidth; // Force reflow
    sliderContainer.classList.add('scroll-smooth');
  }, 100);

  // Update counter and dots on scroll
  const updatePagination = () => {
    const offset = getCardWidthAndGap();
    const scrollPosition = sliderContainer.scrollLeft;
    
    let visualIndex = Math.round(scrollPosition / offset);
    visualIndex = Math.max(0, Math.min(visualIndex, infiniteReviews.length - 1));
    
    // Infinite loop jump check
    // If we scroll into the first set (index < 5), jump forward by setSize
    if (visualIndex < 5) {
      sliderContainer.classList.remove('scroll-smooth', 'snap-x', 'snap-mandatory');
      sliderContainer.scrollLeft += setSize * offset;
      visualIndex += setSize;
      void sliderContainer.offsetWidth;
      sliderContainer.classList.add('scroll-smooth', 'snap-x', 'snap-mandatory');
    }
    // If we scroll into the third set (index > 55), jump backward by setSize
    else if (visualIndex >= setSize * 2 + 15) {
      sliderContainer.classList.remove('scroll-smooth', 'snap-x', 'snap-mandatory');
      sliderContainer.scrollLeft -= setSize * offset;
      visualIndex -= setSize;
      void sliderContainer.offsetWidth;
      sliderContainer.classList.add('scroll-smooth', 'snap-x', 'snap-mandatory');
    }
    
    const activeCard = sliderContainer.children[visualIndex];
    if (!activeCard) return;
    
    const actualIndex = parseInt(activeCard.dataset.index);
    
    if (sliderCounter) {
      sliderCounter.textContent = `${actualIndex + 1} / ${setSize}`;
    }
    
    dots.forEach((dot, idx) => {
      if (idx === actualIndex) {
        dot.className = 'w-2 h-2 rounded-full transition-all bg-sage scale-125';
      } else {
        dot.className = 'w-2 h-2 rounded-full transition-all bg-gray-300 hover:bg-sage-light';
      }
    });
  };

  sliderContainer.addEventListener('scroll', () => {
    requestAnimationFrame(updatePagination);
  });

  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      const offset = getCardWidthAndGap();
      sliderContainer.scrollBy({ left: -offset, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      const offset = getCardWidthAndGap();
      sliderContainer.scrollBy({ left: offset, behavior: 'smooth' });
    });
  }
});
