/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    
    for(let x of image){
        x = x.reverse()
    }
    
    for(let i = 0; i<image.length; i++){
        for(let j = 0; j<image[i].length; j++){
            if(image[i][j] == 0){
                image[i][j] = 1
            }else{
                image[i][j] = 0
            }
        }
    }
    
    return image
    
};