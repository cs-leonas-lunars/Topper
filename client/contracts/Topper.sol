pragma solidity >=0.5.0;

contract Topper {
  // Code goes here...
  string public name = "Topper";


event PostTipped(
  uint tipAmount,
  address payable author
);

//Tip Images
function tipPost(_author) public payable {
  require(); //we will probably need to require something to do with their fortmatic account or metamask
  //fetch the image
  // Post memory _post = posts[_id]; //instead of reading the image off of the blockchain, find authod ID from their account's connection to reddit
  //Fetch the author
  address payable author = _author; //ACTUALLY, FIND POST AUTHOR'S WALLET FROM REDDIT
  //Pay the author by sending them ether
  _author.transfer(msg.value);


  //Trigger an event
  emit PostTipped(_tipAmount, _author);
}

}
