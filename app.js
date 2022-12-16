const init = async () => {
    const rsp = await fetch('./config.json');
    const config = await rsp.json();
    
    // INit GitHub
    const github = new Github(config);
    
    // Init UI
    const ui = new UI();
    
    // Search input
    
    const searchUser = document.getElementById('searchUser');
    
    // Search input event listener
    searchUser.addEventListener('keyup', (e) => {
        // Get input text
        const userText = e.target.value;
    
        if(userText !== '') {
            // Make http call
            github.getUser(userText).then(data => {
                if(data.profile.message === 'Not Found') {
                    // Show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    // Shoe the profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
        } else {
            // Clear profile
            ui.clearProfile();
        }
    });
}

init();