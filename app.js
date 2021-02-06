let dscUsername;

window.onload = () => {
    const fragment = new URLSearchParams(window.location.hash.slice(1));

    console.log(fragment);
	
    if(fragment.has('access_token')) {
        const accessToken = fragment.get("access_token");
	const tokenType = fragment.get("token_type");

        fetch('https://discord.com/api/users/@me', {
            headers: {
                authorization: `${tokenType} ${accessToken}`
            }
        }).then(res => res.json())
        .then(response => {
            const { username, discriminator } = response;

            dscUsername = `${username}#${discriminator}`;
        }).catch(console.error);
    }else {
        document.getElementById('login').style.display = 'block';
    }
}

const app = new Vue({
    el: '#app',
    data: {
      isVisible: true,
      msg: dscUsername,
    },
    methods: {
        toggle() {
            this.isVisible = !this.isVisible
        }
    }
})
