export default async function Handler(req, res) {
  const apiUrl = `${process.env.BUTTONDOWN_API_URL}/subscribers`;
  const apiKey = process.env.BUTTONDOWN_API_KEY;

  const { email } = JSON.parse(req.body);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${apiKey}`,
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    const data = await response.json();
    console.log(data);
    return res.status(200).json({ message: data });
  } catch (e) {
    return res.status(500).json({ message: error.message });
  }
}
