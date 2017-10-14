var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.invalidProjectName = function (control) {
        if (control.value === 'Test') {
            return { 'invalidProjectName': true };
        }
        return null;
    };
    CustomValidators.asyncinvalidProjectName = function (control) {
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value === 'TestProject') {
                    resolve({ 'invalidProjectName': true });
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
        return promise;
    };
    return CustomValidators;
}());
export { CustomValidators };
//# sourceMappingURL=D:/Angular/forms-reactive-assignment-start/forms-reactive-assignment-start/src/app/custom-validators.js.map