
class SnapshotSandbox {
    constructor() {
        this.proxy = window;
        this.modifyPropsMap = {}; // 记录在window上修改的属性
        this.active()


    }
    active () {
        this.windowSnapshot = {};// 快照
        for (const prop in window) {
            if (Object.hasOwnProperty.call(window, prop)) {
                this.windowSnapshot[prop] = window[prop];
            }
        }
        Object.keys(this.modifyPropsMap).forEach(prop => {
            window[prop] = this.modifyPropsMap[prop];
        })

    }
    inactive () {
        for (const prop in window) {
            if (Object.hasOwnProperty.call(window, prop)) {
                if (this.windowSnapshot[prop] !== window[prop]) {
                    this.modifyPropsMap[prop] = window[prop];
                    window[prop] = this.windowSnapshot[prop];
                }
            }
        }
    }

}



let sandbox = new SnapshotSandbox();
((window) => {
    window.a = 1;
    window.b = 2;
    console.log('a,b:', a, b)
    sandbox.inactive();
    console.log('a,b:', a, b)
    sandbox.active();
})(sandbox.proxy)