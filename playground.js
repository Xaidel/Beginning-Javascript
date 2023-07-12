/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

var mintedNFT = [];

function mintNFT (name, description, network) {
    const NFT={
        name: name,
        description: description,
        network: network
    };

    mintedNFT.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let x = 0; x < mintedNFT.length; x++){
        NFT = mintedNFT[x];
        console.log("Name: " + NFT.name);
        console.log("Description: " + NFT.description);
        console.log("Network: " + NFT.network);
        console.log("-----------------------------------------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   return mintedNFT.length;
}

// call your functions below this line
mintNFT("SLP", "Test", "Etherium");
mintNFT("BIT", "Test", "Etherium");
listNFTs();
console.log("Total Supply: "+ getTotalSupply());
 