// This code is approached as if there are going to be multiple buttons and multiple ways ( queryselectorAll )

const openModalButtons = document.querySelectorAll('[data-modal-target]'); 
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay'); // so you can show and hide the overlay

/* 
You want to loop over it and for that we use forEach. forEach() always returns undefined and is not chainable, 
The forEach() method calls a function for each element in an array.
*/

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    	const modal = document.querySelector(button.dataset.modalTarget);  // Using the query selector to target #modal from the HTML
      openModal(modal);
  })
})

overlay.addEventListener('click', () => {
  const modal = document.querySelectorAll('.modal.active');
  modal.forEach(modal => {
    closeModal(modal);
  })
})

/*
  The modal is not based off of the queryselector or based on the data attribute, instead you want to access the parent modal, 
  because the modal is within the parent. You want to get the closest parent element, it checks the parents if any other parent 
  has the .modal class.
*/

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    	const modal = button.closest('.modal');
      closeModal(modal);
  })
})


function openModal(modal) {
  if (modal == null) return 
  modal.classList.add('active');
  overlay.classList.add('active');
} 

function closeModal(modal) {
  if (modal == null) return 
  modal.classList.remove('active');
  overlay.classList.remove('active');
} 

// Filter function on keywords
// https://dev.to/michelc/search-and-filter-a-table-with-javascript-28mi

(function () {
  "use strict";

  let TableFilter = (function () {
    let Arr = Array.prototype;
    let search;

    function onInputEvent(e) {
      search = e.target.value.toLowerCase();
      let tables = document.getElementsByClassName(e.target.getAttribute("data-table"));
      Arr.forEach.call(tables, function (table) {
        Arr.forEach.call(table.tBodies, function (tbody) {
          Arr.forEach.call(tbody.rows, filter);
        });
      });
    }

    function filter(row) {
      let text = row.textContent.toLowerCase();
      row.style.display = text.indexOf(search) === -1 ? "none" : "table-row";
    }

    return {
      init: function () {
        let inputs = document.getElementsByClassName('table-filter');
        Arr.forEach.call(inputs, function(input) {
          input.oninput = onInputEvent;
          if (input.value !== "") input.oninput({ target: input });
        });
      }
    };

  })();

  TableFilter.init();
})();