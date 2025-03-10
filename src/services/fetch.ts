const fetch = async (url: string, options: RequestInit) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        reqId: 'StaticRequestId',
        ...anonymousTokenHeaders,
      },
      body: JSON.stringify({ query }),
      timeout: 0,
    };

    const response = await fetch(
      `${getHost('hookup_hangout')}/graphql`,
      options
    );
    const { data } = await response.json();

    return data;
}
