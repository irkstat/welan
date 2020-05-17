let tab = function () {
    let tabNav = document.querySelectorAll('.tab_menu'),
        tabContent = document.querySelectorAll('.tabs_content'),
        tabName;
 
    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });
 
    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is_active');
        });
        this.classList.add('is_active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
 
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is_active') : item.classList.remove('is_active');
        })
    }
 
 };
 
 
 tab();