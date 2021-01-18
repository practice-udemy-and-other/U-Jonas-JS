//120. An Example of Asynchronous JavaScript:
/* 
const second = () => {
    setTimeout(() => {
        console.log('async');
    }, 2000)
};

const first = () => {
    console.log('Hey there')
    second();
    console.log('The end');
};

first();
 */    

// 122. The Old Way: Asynchronous JavaScript with Callbacks:
/*          
function getRecipe() {
    setTimeout(() => {
        const recipeID = [523, 883, 432, 974];
        console.log(recipeID);

        setTimeout(id => {
            const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe2 = {title: 'Italian Pizza', publisher: 'Jonas'};
                console.log(recipe);
            }, 1500, recipe.publisher);

        }, 1500, recipeID[2]);

    }, 1500);
}
getRecipe();
  */      

// 123. From Callback Hell to Promises:
/* 
const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve([523, 883, 432, 974]);
  }, 1500);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID)

    });
}

getIDs
.then(IDs => {
    console.log(IDs);
})
.catch(error => {
    console.log(`Error: ${error}`);
});
 */       