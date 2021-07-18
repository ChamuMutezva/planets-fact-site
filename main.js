//import gsap from 'gsap' *** did not work as this is an
// html , javascript project. compiler like babel needed to 
//convert ECMAScript 2015+ code into a backwards compatible
// version of JavaScript in current and older browsers or environments

(function () {
  // toggle menu modal open
  const menuModal = document.querySelector(".toggle--btn")
  const modal = document.querySelector(".main__nav__list")
  const tabBtns = Array.from(document.querySelectorAll(".tab__item--btn"))
  console.log(tabBtns)
  //tab trapping elements 
  let mql = window.matchMedia('(max-width: 679px)');
  console.log(mql)
  const focusableElements = Array.from(document.querySelectorAll(".planet--btn"))
  const firstFocusableElement = focusableElements[0]//first focusable element
  const lastFocusableElement = focusableElements[focusableElements.length - 1]// last focused element
  console.log(firstFocusableElement)
  console.log(lastFocusableElement)

  /*
  focusableElements.forEach(planet => {
    planet.addEventListener("click", ()=> {  
      console.log("gsap")
      gsap.from(".tabbed", { duration: 3, opacity: 0, scale: 0.3, y: 150 })
    })
  })
  */

  tabBtns.forEach(tab => {
    tab.addEventListener("click", ()=> {
      gsap.from(".planet__img__wrapper", { duration: 3, opacity: 0, scale: 0.3, y: 150 })
    })
  })

  //tab trapping method and call
  if (mql.matches) {
    document.addEventListener('keydown', function (e) {
      let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) { // if shift key pressed for shift + tab combination
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus(); // add focus for the last focusable element
          e.preventDefault();
        }
      } else { // if tab key is pressed
        if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
          firstFocusableElement.focus(); // add focus for the first focusable element
          e.preventDefault();
        }
      }
    });

    firstFocusableElement.focus();
  }
  //end of tab trapping

  console.log(menuModal)

  menuModal.addEventListener("click", () => {
    // gsap.set(".toggle--btn", {transformOrigin: "50% 50%"})
    //  gsap.to(".toggle--btn", { duration: 2, rotation: 360 });
    gsap.from(".toggle--btn", { duration: 1.5, opacity: 0, scale: 0.3, easy: "back" })
    gsap.from(".planet", { duration: 1, opacity: 0, scale: 0.3, y: 150, stagger: 0.25 })
    console.log("button clicked")
    modal.classList.toggle("modal__hide")
    document.body.classList.toggle("modal__scroll")
  })
  // Get relevant elements and collections
  const tabbed = document.querySelector('.tabbed');
  const tablist = tabbed.querySelector('ul');
  const tabs = tablist.querySelectorAll('a');
  const panels = tabbed.querySelectorAll('[id^="section"]');

  // The tab switching function
  const switchTab = (oldTab, newTab) => {
    newTab.focus();
    // Make the active tab focusable by the user (Tab key)
    newTab.removeAttribute('tabindex');
    // Set the selected state
    newTab.setAttribute('aria-selected', 'true');
    oldTab.removeAttribute('aria-selected');
    oldTab.setAttribute('tabindex', '-1');
    // Get the indices of the new and old tabs to find the correct
    // tab panels to show and hide
    let index = Array.prototype.indexOf.call(tabs, newTab);
    let oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
    panels[oldIndex].hidden = true;
    panels[index].hidden = false;
  }

  // Add the tablist role to the first <ul> in the .tabbed container
  tablist.setAttribute('role', 'tablist');

  // Add semantics are remove user focusability for each tab
  Array.prototype.forEach.call(tabs, (tab, i) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('id', 'tab' + (i + 1));
    tab.setAttribute('tabindex', '-1');
    tab.parentNode.setAttribute('role', 'presentation');

    // Handle clicking of tabs for mouse users
    tab.addEventListener('click', e => {
      e.preventDefault();
      let currentTab = tablist.querySelector('[aria-selected]');
      if (e.currentTarget !== currentTab) {
        switchTab(currentTab, e.currentTarget);
      }
    });

    // Handle keydown events for keyboard users
    tab.addEventListener('keydown', e => {
      // Get the index of the current tab in the tabs node list
      let index = Array.prototype.indexOf.call(tabs, e.currentTarget);
      // Work out which key the user is pressing and
      // Calculate the new tab's index where appropriate
      let dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;
      if (dir !== null) {
        e.preventDefault();
        // If the down key is pressed, move focus to the open panel,
        // otherwise switch to the adjacent tab
        dir === 'down' ? panels[i].focus() : tabs[dir] ? switchTab(e.currentTarget, tabs[dir]) : void 0;
      }
    });
  });

  // Add tab panel semantics and hide them all
  Array.prototype.forEach.call(panels, (panel, i) => {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', '-1');
    let id = panel.getAttribute('id');
    panel.setAttribute('aria-labelledby', tabs[i].id);
    panel.hidden = true;
  });

  // Initially activate the first tab and reveal the first tab panel
  tabs[0].removeAttribute('tabindex');
  tabs[0].setAttribute('aria-selected', 'true');
  panels[0].hidden = false;
})();