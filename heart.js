function clearDash(el) {
    var pathLength = el.getTotalLength() || el.node().getTotalLength();
  
    el.setAttribute('stroke-dasharray', pathLength);
    el.setAttribute('stroke-dashoffset', pathLength);
  }
  
  clearDash(document.querySelector('.heart__circle1'));
  clearDash(document.querySelector('.heart__circle2'));
  clearDash(document.querySelector('.heart__heart'));
  
  var timeline = anime.timeline({ autoplay: true, direction: 'normal'});
  
  timeline
  .add({
    targets: '.heart__box',
    strokeDashoffset: {
      value: [anime.setDashoffset, 0],
      duration: 850,
      easing: 'easeInOutQuad'
    },
    opacity: {
      value: [1, 0.3],
      duration: 650,
      delay: 2650,
      easing: 'easeInOutQuad'
    },
  })
  .add({
    targets: '.heart__circle1',
    strokeDashoffset: {
      value: [anime.setDashoffset, 0],
      duration: 850,
      delay: 850,
      easing: 'easeInOutQuad'
    },
    offset: 0
  })
  .add({
    targets: '.heart__circle2',
    strokeDashoffset: {
      value: [anime.setDashoffset, 0],
      duration: 850,
      delay: 850,
      easing: 'easeInOutQuad'
    },
    offset: 0
  })
  .add({
    targets: '.heart__circle1',
    translateX: {
      value: [0, 17.5],
      duration: 850,
      delay: 1650,
      easing: 'easeInOutQuad'
    },
    opacity: {
      value: [1, 0.3],
      duration: 650,
      delay: 2650,
      easing: 'easeInOutQuad'
    },
    offset: 0
  })
  .add({
    targets: '.heart__circle2',
    translateY: {
      value: [0, -17.5],
      duration: 850,
      delay: 1650,
      easing: 'easeInOutQuad'
    },
    opacity: {
      value: [1, 0.3],
      duration: 650,
      delay: 2650,
      easing: 'easeInOutQuad'
    },
    offset: 0
  })
  .add({
    targets: '.heart',
    rotate: {
      value: [0, '-45deg'],
      duration: 850,
      delay: 2450,
      easing: 'easeInOutQuad'
    },
    offset: 0
  })
  .add({
    targets: '.heart__heart',
    strokeDashoffset: {
      value: [anime.setDashoffset, 0],
      duration: 850,
      delay: 3250,
      easing: 'easeInOutQuad'
    },
    offset: 0
  })
  .add({
    targets: '.heart__heart2',
    opacity: {
      value: [0, 1],
      duration: 850,
      delay: 4050,
      easing: 'easeInOutQuad'
    },
    offset: 0
  })
  ;