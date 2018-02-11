module.exports = function(fromUser, toUser) {
    toUser.Id = fromUser.Id;    
    toUser.UserName = fromUser.UserName;
    toUser.Password = fromUser.Password;
    toUser.FirstName = fromUser.FirstName;
    toUser.LastName = fromUser.LastName;
    toUser.Phone = fromUser.Phone;
    toUser.Email = fromUser.Email;
    toUser.IsReviewer = fromUser.IsReviewer;
    toUser.IsAdmin = fromUser.IsAdmin;    
}