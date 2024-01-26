import https from 'https';

export default function FeedbackForm() {
    const url = "http://api.jugemkey.jp/api/horoscope/free/2024/01/25"

    https.get(url,(res) => {
        let resdata = '';
        res.on("data",function(d){
            resdata += d;
        });
    })
    return <p>{resdata}</p>
}