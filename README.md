<h1>mvpstudio test case</h1>

<h2 id="installation">Installation</h2>
<ol>
  <li><strong>Clone the Repository</strong>:
    <pre><code>git clone https://github.com/cydexx/mvp-case.git</code></pre>
  </li>
  <li><strong>Navigate to the Project Directory</strong>:
    <pre><code>cd mvp-case</code></pre>
  </li>
  <li><strong>Install Dependencies</strong>:
    <pre><code>pnpm install</code></pre>
  </li>
</ol>

<h2 id="running-the-app">Running the App</h2>
<p>Once you have installed the dependencies, you can start the development server and run the app on your mobile device or emulator.</p>

<h3>On a Physical Device</h3>
<ol>
  <li>Start the Expo development server:
    <pre><code>pnpm start</code></pre>
  </li>
  <li>Scan the QR code that appears in your terminal using the <strong>Expo Go</strong> app on your phone.</li>
</ol>

<h3>On an Emulator</h3>
<p>To run on an emulator, you will need either an Android emulator or an iOS simulator:</p>
<ul>
  <li><strong>For Android:</strong>
    <ul>
      <li>Ensure you have Android Studio installed with an AVD (Android Virtual Device) configured.</li>
      <li>Run the following command:
        <pre><code>pnpm start --android</code></pre>
      </li>
    </ul>
  </li>
  <li><strong>For iOS:</strong>
    <ul>
      <li>Ensure you have Xcode installed on your Mac.</li>
      <li>Run the following command:
        <pre><code>pnpm start --ios</code></pre>
      </li>
    </ul>
  </li>
</ul>

<h2 id="troubleshooting">Troubleshooting</h2>
<ul>
  <li><strong>Metro Bundler Issues:</strong> If you encounter errors with Metro bundler, try clearing the cache and restarting the server:
    <pre><code>expo start -c</code></pre>
  </li>
  <li><strong>Installation Issues:</strong> If you face issues during <code>npm install</code>, try deleting the <code>node_modules</code> directory and <code>package-lock.json</code> file, and reinstall dependencies:
    <pre><code>rm -rf node_modules package-lock.json
pnpm install</code></pre>
  </li>
  <li><strong>Expo App Doesn't Load:</strong> If the Expo Go app doesn't load the project, make sure your mobile device and development machine are on the same network.</li>
</ul>

