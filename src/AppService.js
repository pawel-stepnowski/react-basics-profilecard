export class AppService
{
    static async readProfile()
    {
        const profile =
        {
            name: 'Anna Effective',
            image: '/react-basics-profilecard/images/Ellipse 109.png',
            verified: true,
            topic: 'Double your income with me!',
            counter: 4881,
            icon: '',
        };
        // Simulation of a longer waiting time for a response.
        await new Promise(f => setTimeout(f, 2000));
        return profile;
    }
}