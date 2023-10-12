public class Codec {

    public String baseUrl = "https://tiny.com";
    public HashMap<String, String> lib = new HashMap<String, String>();

    // Encodes a URL to a shortened URL.
    public String encode(String longUrl) {
        String encoded = baseUrl+lib.size();
        lib.put(encoded, longUrl);
        return encoded;
    }

    // Decodes a shortened URL to its original URL.
    public String decode(String shortUrl) {
        String original = lib.get(shortUrl);
        return original;
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.decode(codec.encode(url));