import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a
                href='https://github.com/Jem256'
                target='_blank'
                rel='noreferrer'
            >
                <BsGithub />
            </a>
            <a
                href='https://www.linkedin.com/in/jemimah-nagasha-99b256190/'
                target='_blank'
                rel='noreferrer'
            >
                <BsLinkedin />
            </a>
            <a
                href='https://twitter.com/nagasha_'
                target='_blank'
                rel='noreferrer'
            >
                <BsTwitter />
            </a>
        </div>
    );
};

export default SocialMedia;
