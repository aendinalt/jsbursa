angular.module('hw12', [])
    .directive('imagecrop', function(){
        return function(scope,element,attrs){
            console.log(scope);
            console.log(element);
            console.log(attrs);

            element.css({
                'background-image': 'url(' + attrs.imagecrop + ')',
                'width': attrs.imageWidth + 'px',
                'height': attrs.imageHeight + 'px',

            })

        }
    });