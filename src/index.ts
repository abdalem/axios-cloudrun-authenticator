import axios, { AxiosInstance } from "axios";

const authenticator = (instance: AxiosInstance, serviceUrl?: string): void => {
  if (!serviceUrl) {
    const originRegex = /^.+?[^\/:](?=[?\/]|$)/i;
    const regexMatch = originRegex.exec(`${instance.defaults.baseURL}`);
    if (!regexMatch) return;
    serviceUrl = regexMatch[0];
  }

  const metadataServerUrl =
    "http://metadata/computeMetadata/v1/instance/service-accounts/default/identity?audience=";

  instance.interceptors.request.use(async (req) => {
    const { data } = await axios.get(metadataServerUrl + serviceUrl, {
      headers: {
        "Metadata-Flavor": "Google",
      },
    });

    req.headers = {
      ...req.headers,
      Authorization: `Bearer ${data}`,
    };
    return req;
  });
};

export default authenticator;
