(function() {
    const data = [ // const as the data is not expected to change during run time
        {
            name: "CSS Peek",
            description: "Allows you to see the CSS settings for an HTML element.",
            url: "https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek",
            author: "Pranay Prakash",
            downloads: 2310295,
            stars: "3.5/5",
            price: "Free",
            selector: "p1"
        },
        {
            name: "TODO Highlight",
            description: "Makes seeing the comments for what to do next much easier.",
            url: "https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight",
            author: "Wayou Liu",
            downloads: 2050300,
            stars: "4.5/5",
            price: "Free",
            selector: "p2"
        }
    ];

    /**
     * @param {Object} data 
     */
    function Package(data) {
        // ?????? this works ??????
        for (let target in data) {this[target] = data[target];}
        /*this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;*/

        this.getFormattedDownloads = function() {
            return this.downloads.toLocaleString();
        };
        this.getFormattedStars = function() {
            return this.stars.toLocaleString();
        };
    }

    /**
     * @returns {String}
     */
    const getTodaysDate = function() {
        const today = new Date();
        return today.toDateString();
    };

    /**
     * @param {String} id 
     * @returns {Element}
     */
    const getEl = function(id) {
        return document.getElementById(id);
    };

    /**
     * @param {Package} package 
     * @return {void}
     */
    const writePackageInfo = function(package) {
        const selector = package.selector;
        const nameEl = getEl(selector+"-name");
        const descEl = getEl(selector+"-description");
		const authEl = getEl(selector+"-author");
        const downEl = getEl(selector+"-downloads");
        const starEl = getEl(selector+"-stars");

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downEl.textContent = package.getFormattedDownloads();
        starEl.textContent = package.getFormattedStars();
    };

    const dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    const pack1 = new Package(data[0]);
    writePackageInfo(pack1);

    const pack2 = new Package(data[1]);
    writePackageInfo(pack2);
}())