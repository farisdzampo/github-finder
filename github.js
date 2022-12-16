class Github {
    constructor(config) {
        this.client_id = config.client_id;
        this.client_secret = config.client_secret;
        this.repos_count = config.repos_count;
        this.repos_sort = config.repos_sort;
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}