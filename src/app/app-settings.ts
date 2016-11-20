export class AppSettings {
    public static get API_ENDPOINT(): string { return 'https://api.capsulecd.com/prod'; }

    public static get DOCKER_IMAGES(): any {
        return {
            'default': {
                display: 'Custom',
                image: 'analogj/capsulecd'
            },
            'chef': {
                display: 'Chef',
                image: 'analogj/capsulecd:chef'
            },
            'javascript': {
                display: 'Javascript (Bower + Npm)',
                image: 'analogj/capsulecd:javascript'
            },
            'node': {
                display: 'Node',
                image: 'analogj/capsulecd:node'
            },
            'python': {
                display: 'Python',
                image: 'analogj/capsulecd:python'
            },
            'ruby': {
                display: 'Ruby',
                image: 'analogj/capsulecd:ruby'
            }

        }
    }
}
