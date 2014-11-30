angular.module('hw12', [])
    .directive('imagecrop', function(){
        return function(scope,element,attrs){

            attrs.$observe('selectionWidth', changeImage);
            attrs.$observe('selectionHeight', changeImage);
            attrs.$observe('selectionX', changeImage);
            attrs.$observe('selectionY', changeImage);

            var mask = element.append(
                '<span></span>'
            );

            function changeImage(){
                element.css({
                    'background-image': 'url(' + attrs.imagecrop + ')',
                    'width': attrs.imageWidth - attrs.selectionWidth + 'px',
                    'height': attrs.imageHeight - attrs.selectionHeight + 'px',
                    'background-attachment': 'fixed',
                    'background-repeat': 'no-repeat'

                });



                mask.css({
                    'border': '2px dashed red',
                    'position': 'relative',
                    'width': attrs.selectionWidth + 'px',
                    'height': attrs.selectionHeight + 'px',
                    'left': attrs.selectionX + 'px',
                    'top': attrs.selectionY + 'px'
                });
            }
        }
    });