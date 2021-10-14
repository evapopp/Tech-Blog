const addComment = async (event) => {
    // event.preventDefault();
  
    // Collect values from the login form
    const commentValue = document.querySelector('.comment-input').value;
    const commentId = doument.querySelector('#secret').value;
    console.log('comment value', commentValue);
    console.log('comment id', commentId);
  
    if (commentValue && commentId) {
      // Send a POST request to the API endpoint
      const comment = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ commentValue, commentId }),
        headers: { 'Content-Type': 'application/json' },
      });
        console.log('----------hey hey we made it this far----------------a', comment)
        if (comment.ok) {
            // If successful, redirect the browser to the profile page
            document.location.reload();
            console.log('-------we must be doing something righhhhhttt--------')
        } else {
            alert("Your comment was unable to be posted.");
        }
    }
};



document
  .querySelector('.commentBtn')
  .addEventListener('submit', addComment);