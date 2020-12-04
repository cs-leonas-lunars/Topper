pragma solidity >=0.5.0;

contract Topper {
  // Code goes here...
  string public name = "Topper";


//Store Images
uint public postCount = 0;
mapping(uint => Post) public posts;
struct Post {
  uint id;
  string hash;
  uint tipAmount;
  address payable author;
}

event PostCreated(
  uint id,
  string hash,
  uint tipAmount,
  address payable author
);

event PostTipped(
  uint id,
  string hash,
  uint tipAmount,
  address payable author
);

//Tip Images
function tipImages(uint _id) public payable {
  require(_id > 0); //we will probably need to require something to do with their fortmatic account
  //fetch the image
  Post memory _post = posts[_id]; //instead of reading the image off of the blockchain, find authod ID from their account's connection to reddit
  //Fetch the author
  address payable _author = _post.author; //ACTUALLY, FIND POST AUTHOR'S WALLET FROM REDDIT
  //Pay the author by sending them ether
  _author.transfer(msg.value);


  //Trigger an event
  emit PostTipped(_id, _post.hash, _post.tipAmount, _author);
}

}
