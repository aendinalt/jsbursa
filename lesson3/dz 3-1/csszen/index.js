window.onload = function() {
    var buttonFind = document.querySelector('.selector-find');
    var buttonNext = document.querySelector('.selector-next');
    var buttonPrev = document.querySelector('.selector-prev');
    var buttonParent = document.querySelector('.nav-top');
    var buttonFirstChild = document.querySelector('.nav-bottom');
    var buttonPrevSibling = document.querySelector('.nav-left');
    var buttonFolSibling = document.querySelector('.nav-right');
    var searchTextBox = document.querySelector('input.selector');
    var currentElementIndex;
    var foundElementList;
    var currentElement;

    searchTextBox.setAttribute('placeholder', 'enter your selector here');
//Event listeners zone
    buttonFind.addEventListener('click', findBySelector);
    buttonNext.addEventListener('click', findNext);
    buttonPrev.addEventListener('click', findPrev);
    buttonParent.addEventListener('click', findParent);
    buttonFirstChild.addEventListener('click', findFirstChild);
    buttonFolSibling.addEventListener('click', followingSibling);
    buttonPrevSibling.addEventListener('click', prevSibling);

// functions zone
    function findBySelector(event) {
        var searchTerm = searchTextBox.value;
        //console.log(searchTerm);
        if (searchTerm) {
            if (isSelectorValid(searchTerm)) {
                foundElementList = document.querySelectorAll(searchTerm);
                console.log(foundElementList);
                if (foundElementList.length > 1) {
                    buttonNext.disabled = false;
                    console.log(foundElementList.length);
                }
                unhighlight();
                currentElementIndex = 0;
                currentElement = foundElementList[currentElementIndex];
                highlight(currentElement);
                parentExists(currentElement);
                childExists(currentElement);
                prevSiblingExists(currentElement);
                followingSiblingExists(currentElement);

            } else {
                alert('Incorrect selector.\n Please see manual here:\n https://developer.mozilla.org/ru/docs/Web/API/document.querySelector');
            }
        } else {
            alert('Please enter selector');
        }
    }

    function highlight(elt) {
        elt.className = elt.className + ' highlighted';
    }

    function unhighlight() {
        var highlightedElement = document.querySelector('.highlighted');
        if (highlightedElement) {
            highlightedElement.className = highlightedElement.className.substring(0, highlightedElement.className.length - 12);
        }
    }

    function findNext() {
        unhighlight();
        currentElementIndex = currentElementIndex + 1;
        currentElement = foundElementList[currentElementIndex];
        highlight(currentElement);

        if (currentElementIndex >= foundElementList.length - 1) {
            buttonNext.disabled = true;
        }
        if (currentElementIndex > 0) {
            buttonPrev.disabled = false;
        }
    }

    function findPrev() {
        unhighlight();
        currentElementIndex = currentElementIndex - 1;
        currentElement = foundElementList[currentElementIndex];
        highlight(currentElement);

        if (currentElementIndex <= 0) {
            buttonPrev.disabled = true;
        }
        if (currentElementIndex < foundElementList.length - 1) {
            buttonNext.disabled = false;
        }
    }

    function isSelectorValid(selector) {
        try {
            document.querySelectorAll(selector);
            return true;
        } catch (x) {
            return false;
        }
    }

    function findParent() {
        disableNextPrev();
        parentExists(currentElement);
        currentElement = currentElement.parentNode;
        console.log('parent: ' + currentElement);
        unhighlight();
        highlight(currentElement);
        parentExists(currentElement);
        childExists(currentElement);
        followingSiblingExists(currentElement);
        prevSiblingExists(currentElement);
    }

    function findFirstChild() {
        disableNextPrev();
        childExists(currentElement);
        currentElement = currentElement.firstElementChild;
        unhighlight();
        highlight(currentElement);
        parentExists(currentElement);
        childExists(currentElement);
    }

    function disableNextPrev() {
        buttonNext.disabled = true;
        buttonPrev.disabled = true;
    }

    function parentExists(element) {
        try {
            var parentElement = element.parentNode;
            console.log('parent: ' + parentElement);
            buttonParent.disabled = false;
        } catch (x) {
            console.log('no parent');
            buttonParent.disabled = true;
        }
    }

    function childExists(element) {
        try {
            var firstChild = element.firstElementChild;
            console.log(firstChild);
            buttonFirstChild.disabled = false;
        } catch (x) {
            console.log('no child');
            buttonFirstChild.disabled = true;
        }
    }

    function followingSiblingExists(element) {
        try {
            var nextSiblingElement = element.nextElementSibling;
            console.log(nextSiblingElement);
            buttonFolSibling.disabled = false;
        } catch (x) {
            console.log('no next sibling');
            buttonFolSibling.disabled = true;
        }
    }

    function prevSiblingExists(element) {
        try {
            var prevSiblingElement = element.nextElementSibling;
            console.log(prevSiblingElement);
            buttonPrevSibling.disabled = false;
        } catch (x) {
            console.log('no next sibling');
            buttonPrevSibling.disabled = true;
        }
    }

    function followingSibling() {
        disableNextPrev();
        followingSiblingExists(currentElement);
        unhighlight();
        var nextSiblingElement = currentElement.nextElementSibling;
        unhighlight(nextSiblingElement);
        currentElement = nextSiblingElement;
    }

    function prevSibling() {
        disableNextPrev();
        prevSiblingExists(currentElement);
        unhighlight();
        var prevSiblingElement = currentElement.nextElementSibling;
        unhighlight(prevSiblingElement);
        currentElement = prevSiblingElement;
    }

};