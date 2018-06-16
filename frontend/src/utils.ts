
declare const showLoader: any;
declare const hideLoader: any;

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
    handleAuthError: function (error) {
        if (error.status == 401) {
            // this.authService.logout();
        }
    },
    showErrorMessage: function (text, error) {
        this.handleAuthError(error);
        console.log(error);
        // this.notification(`${text} ${JSON.stringify(error)}`, "error");
        this.notification(`${text}`, "error");
    },
    showLoader: function (element) {
        showLoader(element)
    },
    hideLoader: function (element) {
        hideLoader(element);
    }
});