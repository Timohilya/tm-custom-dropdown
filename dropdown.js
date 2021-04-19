const Dropdown = {
    dropdownGroups: document.querySelectorAll('[data-dropdown-group]'),
    init: function() {
        this.dropdownGroups.forEach(dropdownGroup => {
            dropdownGroup.querySelectorAll('[data-dropdown-item]').forEach(dropdown => {
                dropdown.querySelector('[data-dropdown-button]').addEventListener('click', () => {
                    if(!dropdown.classList.contains('active')) {
                        this.hideAllDropdowns(dropdownGroup);
                        dropdown.classList.add('active');
                    } else {
                        dropdown.classList.remove('active');
                    }
                });
            });
        });
    },
    hideAllDropdowns: function(dropdownGroup) {
        dropdownGroup.querySelectorAll('[data-dropdown-item]').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
};

Dropdown.init();