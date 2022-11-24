---
title: 10월 프리온보딩 프론트엔드 챌린지 사전 과제
description: NextJS를 톺아보며 사전 과제를 해결해봅니다.
tags: [web, next]
date: '2022-09-16'
---

10월 프리온보딩 프론트엔드 챌린지 사전 과제입니다.
아래 글은 정답이 아니며, 제 생각을 적은 것입니다.

<!--truncate-->

## 1. CSR(Client-side Rendering)이란 무엇이며, 그것의 장단점에 대하여 설명해주세요.

- 자바스크립트를 이용하여 브라우저에서 직접 페이지를 렌더링하는 것을 의미한다.
<table>
  <tr>
    <th>장점</th>
    <td>- 일단 로드되고 나면 사이트 내에서 돌아다닐 때 로드되는 과정이 없어지므로 사용성이 좋아진다.</td>
    <td>- 서버를 호출할 때마다 전체 UI를 다시 로드할 필요가 없다.</td>
  </tr>
  <tr>
    <th>단점</th>
    <td>애플리케이션 규모가 커질수록 JS양이 증가하여 페이지가 다른 면에서 무거워질 수 있다.</td>
    <td>초기 페이지 로드에 더 많은 시간이 걸린다.</td>
    <td>SEO에 친화적이지 않다.</td>
  </tr>
</table>

## 2. SPA(Single Page Application)로 구성된 웹 앱에서 SSR(Server-side Rendering)이 필요한 이유에 대하여 설명해주세요.

- CSR의 단점을 극복하며 SPA의 장점도 가져갈 수 있다.
- SSR을 하므로 SEO에 친화적이지 않은 CSR의 단점을 극복할 수 있다.
- 초기 페이지 로드가 빨라진다.
- SPA로 구성되어 있으므로 html을 새로고침하지 않아도 된다.

## 3. Next.js 프로젝트를 세팅한 뒤 yarn start 스크립트를 실행했을 때 실행되는 코드를 nextjs github 레포지토리에서 찾은 뒤, 해당 파일에 대한 간단한 설명을 첨부해주세요.

### yarn start

Next.js가 Server에서 Html을 만든 후, Client가 렌더링 된다는 것을 인지하고 코드를 확인해보았다.
Next.js를 create 하면 '\_app.jsx'을 확인할 수 있다.

```jsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

MyApp은 `Component`와 `pageProps`를 props로 받는다.

- Component: 요청한 페이지. `/pages/index.jsx` 파일이 props로 들어온다. `index.jsx`를 삭제하면 404 Error 페이지가 뜬다.
- pageProps: `getInitialProps`를 통해 내려 받은 props 이다.

### Nextjs repo

#### 1. cli

1. [packages/next/cli/next-start.ts](https://github.com/vercel/next.js/blob/canary/packages/next/cli/next-start.ts)

```ts
import { startServer } from '../server/lib/start-server';
import arg from 'next/dist/compiled/arg/index.js';

// next Start
const nextStart: cliCommand = (argv) => {
  const validArgs: arg.Spec = {
    // Types
    '--help': Boolean,
    // ...
  };

  let args: arg.Result<arg.Spec>;

  try {
    args = arg(validArgs, { argv });
    // 옵션 재할당
  } catch (error) {
    if (isError(error) && error.code === 'ARG_UNKNOWN_OPTION') {
      return printAndExit(error.message, 1);
    }
    throw error;
  }

  // 서버에서 쓰이는 변수들
  const dir = getProjectDir(args._[0]);
  const host = args['--hostname'] || '0.0.0.0';
  const port = getPort(args);
  const keepAliveTimeoutArg: number | undefined = args['--keepAliveTimeout'];

  // ...

  // 서버 실행
  startServer({
    // startServer:  https://github.com/vercel/next.js/blob/canary/packages/next/server/lib/start-server.ts
    dir,
    hostname: host,
    port,
    keepAliveTimeout,
  })
    .then(async (app) => {
      const appUrl = `http://${app.hostname}:${app.port}`;
      Log.ready(`started server on ${host}:${app.port}, url: ${appUrl}`);
      await app.prepare(); // app 구축 준비!
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};
```

이제 `startServer`가 어떻게 서버구축을 해주고 있는지 찾아보았다.

#### 2. server

1. [packages/next/server/lib/start-server.ts](https://github.com/vercel/next.js/blob/canary/packages/next/server/lib/start-server.ts)

```ts
import type { NextServerOptions, NextServer, RequestHandler } from '../next';
import next from '../next';

export function startServer(opts: StartServerOptions) {
  let requestHandler: RequestHandler;

  const server = http.createServer((req, res) => {
    return requestHandler(req, res);
  });

  return new Promise<NextServer>((resolve, reject) => {
    let port = opts.port;
    let retryCount = 0;
    let upgradeHandler: any;

    server.on('listening', () => {
      const addr = server.address();
      const hostname =
        !opts.hostname || opts.hostname === '0.0.0.0'
          ? 'localhost'
          : opts.hostname;

      const app = next({
        // next가 뭔가 해주고 있는 것을 발견
        ...opts,
        hostname,
        customServer: false,
        httpServer: server,
        port: addr && typeof addr === 'object' ? addr.port : port,
      });

      requestHandler = app.getRequestHandler();
      upgradeHandler = app.getUpgradeHandler();
      resolve(app);
    });

    server.listen(port, opts.hostname);
  });
}
```

`next`가 어디에 있는지 찾아보있다.

2. [packages/next/server/next.ts](https://github.com/vercel/next.js/blob/canary/packages/next/server/next.ts)

```ts
export class NextServer {
  constructor(options) {
    this.options = options;
  }

  get hostname() {
    return this.options.hostname;
  }
  get port() {
    return this.options.port;
  }

  getRequestHandler(): RequestHandler {
    return async (
      req: IncomingMessage,
      res: ServerResponse,
      parsedUrl?: UrlWithParsedQuery
    ) => {
      const requestHandler = await this.getServerRequestHandler();
      return requestHandler(req, res, parsedUrl);
    };
  }

  getUpgradeHandler() {
    return async (req: IncomingMessage, socket: any, head: any) => {
      const server = await this.getServer();
      // @ts-expect-error we mark this as protected so it
      // causes an error here
      return server.handleUpgrade.apply(server, [req, socket, head]);
    };
  }

  // ...

  async prepare() {
    const server = await this.getServer();
    return server.prepare();
  }

  // ...

  async createServer(options) {
    if (options.dev) {
      const DevServer = require('./dev/next-dev-server').default;
      return new DevServer(options);
    }
    const ServerImplementation = await getServerImpl();
    return new ServerImplementation(options);
  }

  async getServer() {
    if (!this.serverPromise) {
      setTimeout(getServerImpl, 10);
      this.serverPromise = this.loadConfig().then(async (conf) => {
        this.server = await this.createServer({
          ...this.options,
          conf,
        });
        if (this.preparedAssetPrefix) {
          this.server.setAssetPrefix(this.preparedAssetPrefix);
        }
        return this.server;
      });
    }
    return this.serverPromise;
  }
}
```

`nextServer`를 만드는 것(create) 같다.

3. [packages/next/server/next-server.ts](https://github.com/vercel/next.js/blob/canary/packages/next/server/next-server.ts)

```ts
import { RenderOpts, renderToHTML } from './render';

export default class NextNodeServer extends BaseServer {
  // ...

  protected async renderHTML(
    req: NodeNextRequest,
    res: NodeNextResponse,
    pathname: string,
    query: NextParsedUrlQuery,
    renderOpts: RenderOpts
  ): Promise<RenderResult | null> {
    renderOpts.serverComponentManifest = this.serverComponentManifest;
    renderOpts.serverCSSManifest = this.serverCSSManifest;
    renderOpts.fontLoaderManifest = this.fontLoaderManifest;

    return renderToHTML(
      req.originalRequest,
      res.originalResponse,
      pathname,
      query,
      renderOpts
    );
  }
}
```

4. [packages/next/server/render.tsx](https://github.com/vercel/next.js/blob/canary/packages/next/server/render.tsx)
   renderToHTML을 찾아서 까봤다...

```tsx
export async function renderToHTML() {
  // ...
  const AppContainer = ({ children }: { children: JSX.Element }) => (...)

  const AppContainerWithIsomorphicFiberStructure: React.FC<{...}> = ({children}) => {return(...)}

  const Body = ({ children }: { children: JSX.Element }) => {
    return inAmpMode ? children : <div id="__next">{children}</div>;
  };

  const renderDocument = async () => {
    async function loadDocumentInitialProps(
      renderShell?: (
        _App: AppType,
        _Component: NextComponentType
      ) => Promise<ReactReadableStream>
    ) {
      const renderPage: RenderPage = (
        options: ComponentsEnhancer = {}
      ): RenderPageResult | Promise<RenderPageResult> => {
    // ...

        const html = ReactDOMServer.renderToString(
          <Body>
            <AppContainerWithIsomorphicFiberStructure>
              {renderPageTree(EnhancedApp, EnhancedComponent, {
                ...props,
                router,
              })}
            </AppContainerWithIsomorphicFiberStructure>
          </Body>
        );

    // ...
  }

  const documentResult = await renderDocument();

  const htmlProps: HtmlProps = {...};

  const document = (
    <AmpStateContext.Provider value={ampState}>
      <HtmlContext.Provider value={htmlProps}>
        {documentResult.documentElement(htmlProps)}
      </HtmlContext.Provider>
    </AmpStateContext.Provider>
  );

  const documentHTML = ReactDOMServer.renderToStaticMarkup(document);

  const [renderTargetPrefix, renderTargetSuffix] = documentHTML.split(
    "<next-js-internal-body-render-target></next-js-internal-body-render-target>"
  );
}
```

#### 3. client

1. [packages/next/client/next.js](https://github.com/vercel/next.js/blob/canary/packages/next/client/next.js)

```js
import { initialize, hydrate, version, router, emitter } from './';

initialize({})
  .then(() => hydrate())
  .catch(console.error);
```

`initialize()`이후 `hydrate()`를 실행하고 있다.  
`./` 경로를 찾아보았다.

2.  [packages/next/client/index.tsx](https://github.com/vercel/next.js/blob/canary/packages/next/client/index.tsx)

```tsx
export async function initialize(opts: { webpackHMR?: any } = {}): Promise<{...}> {}

function renderApp(App: AppComponent, appProps: AppProps){...}

function renderReactElement(){}

function doRender(input: RenderRouteInfo): Promise<any> {...}

async function render(renderingProps: RenderRouteInfo): Promise<void> {...}

export async function hydrate(opts?: { beforeRender?: () => Promise<void> }) {...}
```

`next.js` 파일 에서 보았던 `initialize` 함수와 `hydrate` 함수와 더불어 무언가를 `render`하는 것 같은 함수를 가져와봤다.

```jsx
  // next/client/index.jsx
  export async function initialize(opts: { webpackHMR?: any } = {}): Promise<{
  assetPrefix: string
  }> {
  initialData = JSON.parse(
  document.getElementById("**NEXT_DATA**")!.textContent!
  )
  window.**NEXT_DATA** = initialData
  }
```

`__NEXT_DATA__` id를 가지고 있는 엘리먼트를 parse해서 `initialData`에 할당하고 있다.

```jsx
  // next/client/index.jsx
  export async function initialize(opts: { webpackHMR?: any } = {}): Promise<{
  assetPrefix: string
  }> {
  initialData = JSON.parse(
  document.getElementById("**NEXT_DATA**")!.textContent!
  )
  window.**NEXT_DATA** = initialData

  // With dynamic assetPrefix it's no longer possible to set assetPrefix at the build time
  // So, this is how we do it in the client side at runtime
  **webpack_public_path** = `${prefix}/_next/` //eslint-disable-line
  }
```

- 주석이 달려있다.
- 동적 assetPrefix를 사용하면 더 이상 빌드 시 assetPrefix를 설정할 수 없습니다. 이것이 런타임에 클라이언트 측에서 수행하는 방법입니다.

```jsx
appElement = document.getElementById('__next');
return { assetPrefix: prefix };
```

`__next` id를 가지고 있는 엘리먼트를 appElement에 할당한 이후, `assetPrefix`를 반환한다.

```jsx
function renderApp(App: AppComponent, appProps: AppProps) {
  return <App {...appProps} />;
}
```

`renderApp` 함수는 `App`과 `appProps` 매개변수를 받아서 `AppComponent`를 리턴한다.

```jsx
function renderReactElement(
  domEl: HTMLElement,
  fn: (cb: () => void) => JSX.Element
): void {
  // mark start of hydrate/render
  if (ST) {
    performance.mark("beforeRender")
  }

  const reactEl = fn(shouldHydrate ? markHydrateComplete : markRenderComplete)

  if (process.env.__NEXT_REACT_ROOT) {
    if (!reactRoot) {
      // Unlike with createRoot, you don't need a separate root.render() call here
      reactRoot = ReactDOM.hydrateRoot(domEl, reactEl)
      // TODO: Remove shouldHydrate variable when React 18 is stable as it can depend on `reactRoot` existing
      shouldHydrate = false
    } else {
      const startTransition = (React as any).startTransition
      startTransition(() => {
        reactRoot.render(reactEl)
      })
    }
  } else {
    // The check for `.hydrate` is there to support React alternatives like preact
    if (shouldHydrate) {
      ReactDOM.hydrate(reactEl, domEl)
      shouldHydrate = false
    } else {
      ReactDOM.render(reactEl, domEl)
    }
  }
}
```

[React18이 안정화](https://ko.reactjs.org/docs/react-dom.html#render) 될 때까지 ReactElement render 방식을 if문으로 나누고 있다.
상황에 따라서 `ReactDOM.hydrateRoot`하거나 `ReactDOM.hydrate`하거나 `ReactDOM.render`으로 렌더하고 있다.
`ReactDOM.hydrateRoot`문을 탔다면, 별도로 `root.render()`하지 않아도 된다.
`shouldHydrate`의 boolean 상태에 따라 `reactEl`의 fn가 달라진다 (markHydrateComplete || markRenderComplete)

> `ReactDOM.render()`는 렌더링하기 원하는 컴포넌트, 렌더링 되길 원하는 컴포넌트들이 포함된 DOM 요소를 인수로 받는다.

```jsx
function doRender(input: RenderRouteInfo): Promise<any> {
  let { App, Component, props, err }: RenderRouteInfo = input

  const appProps: AppProps = {
    ...props,
    Component,
    err,
    router,
  }

  // ...뭔가 <style> 을 붙이고 있는 것 같음...

  const elem: JSX.Element = (
    <>
      <Head callback={onHeadCommit} />
      <AppContainer>
        {renderApp(App, appProps)}
        <Portal type="next-route-announcer">
          <RouteAnnouncer />
        </Portal>
      </AppContainer>
    </>
  )

  // We catch runtime errors using componentDidCatch which will trigger renderError
  renderReactElement(appElement!, callback => (
    <Root callbacks={[callback, onRootCommit]}>
      {process.env.__NEXT_STRICT_MODE ? (
        <React.StrictMode>{elem}</React.StrictMode>
      ) : (
        elem
      )}
    </Root>
  ))

  return renderPromise
}
```

위에서 잘 만든 것들을 `doRender` 함수로 렌더한다고 이해했다.
이때 `renderReactElement`가 재등장하는데, ` renderReactElement` 함수의 첫 번째 매개변수는 `domEl: HTMLElement`였고 두 번째 매개변수는`fn: (cb: () => void) => JSX.Element`였다.

- `appElement`는 `initialize`함수에서 `appElement = document.getElementById('__next')`로 할당하었다.
- `callback 함수`는 `<Root>` 밑으로 `elem`을 넣어주고 있다.

## 과제 후기

내가 과제를 잘 이해한 건지 모르겠다. 너무 어렵게 생각한 것 같기도 하고... 제대로 이해한 것인지 확신도 들지 않았다.
챌린지 이후 보다 더 NextJs를 이해할 수 있기를 바라며...

## Reference

- [Rendering on the Web](https://web.dev/rendering-on-the-web/)
