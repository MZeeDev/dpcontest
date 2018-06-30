
declare const mApp: any;

export const Utils = Object.freeze({
    constructor() {
    },
    // notification: function (text, type) {
    //     new Noty({
    //         text: text,
    //         theme: "relax",
    //         type: type,
    //         timeout: 2000,
    //     }).show();
    // },
    // showErrorMessage: function (text, error) {
    //     this.handleAuthError(error);
    //     console.log(error);
    //     // this.notification(`${text} ${JSON.stringify(error)}`, "error");
    //     this.notification(`${text}`, "error");
    // },
    showLoader: function (element) {
        mApp.showLoader(element)
    },
    hideLoader: function (element) {
        mApp.hideLoader(element);
    },
    blockPage: function () {
        mApp.blockPage();
    },
    unblockPage: function () {
        mApp.unblockPage();
    }
});