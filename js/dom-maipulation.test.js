
describe('removeClass',() => {
    let myParagraph;
    beforeEach(() => {
       myParagraph = document.createElement('p');
       myParagraph.classList.add('test-class');
    });

    test('should remove a class from an elemnet', () => {
        //Act
        removeClass(myParagraph, 'test-class');

        //Assert
    
        expect(myParagraph.classList.contains('test-class')).toBeFalsy();//toBeFalsy()-evaluate certain things like true or false .falsy values undefined, nulls, 0, Strings
        //truthvalues are oterthan else
        //node does have built in module structure
    });
})

function removeClass(element, classToRemove) {
    element.classList.remove(classToRemove);
}