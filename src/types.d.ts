declare interface Profile
{
    name: string
    image: string
    verified: boolean
    topic: string
    counter: number
    icon: string
}
declare interface ProfileCardSettings
{
    presentation:
    {
        flip_horizontally: boolean
    }
    images:
    {
        counter: string
        verified: string
        menu: string
    }
    loading:
    {
        name: string
        topic: string
        image_url: string
    }
}