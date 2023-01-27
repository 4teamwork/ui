<template>
  <AppLayout show-help show-feedback :mini-variant.sync="miniVariant" :app-name="currentApp.title">
    <template #app-icon>
      <AppSwitcher v-model="currentApp" :apps="apps">
        <template #fallback-app>
          <v-icon dark>mdi-bird</v-icon>
        </template>
      </AppSwitcher>
    </template>
    <template #navigation-main>
      <v-list nav>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-bird</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Sparrow </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-bird</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Robin </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-bird</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Starling </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
    <template #toolbar-main>
      <v-text-field hide-details solo-inverted dense />
    </template>
    <template #usermenu>
      <v-list dense>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Hugo Boss </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-flag</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> English </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-flag</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> FranÇais </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-flag</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Deutsch </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
    <v-main>
      <Nuxt />
    </v-main>
  </AppLayout>
</template>
<script>
export default {
  data() {
    return {
      miniVariant: false,
      currentApp: {
        title: 'Birds',
        color: '#FF0000',
        svg_icon:
          'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTAyLjY2NCA1MDIuNjY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDIuNjY0IDUwMi42NjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojMDEwMDAyOyIgZD0iTTM2My41MzIsNzkuODczYy03Mi45NTIsMTQuNDk2LTY3Ljc1NCw3My44NTgtMTI2LjQwNSw5OC44MTYNCgkJCWMtMjUuOTcxLDExLjAyMy04NS44MDksMTcuNjg4LTkyLjMyMywxNC42MDNjLTM5LjczMy0xOC42OC05OC4xNjktNjUuNDAzLTk4LjE2OS02NS40MDNzNS4yMiwzOC4wNTEsMjUuNTgzLDcwLjkwMw0KCQkJQzI0LjYxMiwxODcuNTMzLDAsMTYzLjE3OSwwLDE2My4xNzlzMzEuNTM2LDI3NC43NjksMjQ2Ljc5MSwyNjEuNTAzQzQxMC42LDQxNC42MDgsNDAwLjgyOCwyNjkuNjMxLDQyNy42NjIsMjI3LjQzOA0KCQkJYzI2Ljc5MS00Mi4xMjgsNzUuMDAyLTMzLjM5Miw3NS4wMDItMzMuMzkyUzQ3My4xNzcsNTguMTI5LDM2My41MzIsNzkuODczeiBNNDAxLjg2NCwxNjIuNTMyDQoJCQljLTEwLjAwOSwwLTE4LjA5OC04LjExMS0xOC4wOTgtMTguMDk4czguMDg5LTE4LjA5OCwxOC4wOTgtMTguMDk4YzkuOTY2LDAsMTguMDc2LDguMTMyLDE4LjA3NiwxOC4wOTgNCgkJCVM0MTEuODUxLDE2Mi41MzIsNDAxLjg2NCwxNjIuNTMyeiIvPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K',
      },
      apps: [
        {
          title: 'Birds',
          color: '#FF0000',
          svg_icon:
            'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTAyLjY2NCA1MDIuNjY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDIuNjY0IDUwMi42NjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojMDEwMDAyOyIgZD0iTTM2My41MzIsNzkuODczYy03Mi45NTIsMTQuNDk2LTY3Ljc1NCw3My44NTgtMTI2LjQwNSw5OC44MTYNCgkJCWMtMjUuOTcxLDExLjAyMy04NS44MDksMTcuNjg4LTkyLjMyMywxNC42MDNjLTM5LjczMy0xOC42OC05OC4xNjktNjUuNDAzLTk4LjE2OS02NS40MDNzNS4yMiwzOC4wNTEsMjUuNTgzLDcwLjkwMw0KCQkJQzI0LjYxMiwxODcuNTMzLDAsMTYzLjE3OSwwLDE2My4xNzlzMzEuNTM2LDI3NC43NjksMjQ2Ljc5MSwyNjEuNTAzQzQxMC42LDQxNC42MDgsNDAwLjgyOCwyNjkuNjMxLDQyNy42NjIsMjI3LjQzOA0KCQkJYzI2Ljc5MS00Mi4xMjgsNzUuMDAyLTMzLjM5Miw3NS4wMDItMzMuMzkyUzQ3My4xNzcsNTguMTI5LDM2My41MzIsNzkuODczeiBNNDAxLjg2NCwxNjIuNTMyDQoJCQljLTEwLjAwOSwwLTE4LjA5OC04LjExMS0xOC4wOTgtMTguMDk4czguMDg5LTE4LjA5OCwxOC4wOTgtMTguMDk4YzkuOTY2LDAsMTguMDc2LDguMTMyLDE4LjA3NiwxOC4wOTgNCgkJCVM0MTEuODUxLDE2Mi41MzIsNDAxLjg2NCwxNjIuNTMyeiIvPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K',
        },
        {
          title: 'GEVER',
          type: 'gever',
        },
        {
          title: 'Apes',
          color: '#00FF00',
          disabled: true,
          disabled_reason: 'Maintenance',
          svg_icon:
            'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTAyLjY2NCA1MDIuNjY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDIuNjY0IDUwMi42NjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojMDEwMDAyOyIgZD0iTTM2My41MzIsNzkuODczYy03Mi45NTIsMTQuNDk2LTY3Ljc1NCw3My44NTgtMTI2LjQwNSw5OC44MTYNCgkJCWMtMjUuOTcxLDExLjAyMy04NS44MDksMTcuNjg4LTkyLjMyMywxNC42MDNjLTM5LjczMy0xOC42OC05OC4xNjktNjUuNDAzLTk4LjE2OS02NS40MDNzNS4yMiwzOC4wNTEsMjUuNTgzLDcwLjkwMw0KCQkJQzI0LjYxMiwxODcuNTMzLDAsMTYzLjE3OSwwLDE2My4xNzlzMzEuNTM2LDI3NC43NjksMjQ2Ljc5MSwyNjEuNTAzQzQxMC42LDQxNC42MDgsNDAwLjgyOCwyNjkuNjMxLDQyNy42NjIsMjI3LjQzOA0KCQkJYzI2Ljc5MS00Mi4xMjgsNzUuMDAyLTMzLjM5Miw3NS4wMDItMzMuMzkyUzQ3My4xNzcsNTguMTI5LDM2My41MzIsNzkuODczeiBNNDAxLjg2NCwxNjIuNTMyDQoJCQljLTEwLjAwOSwwLTE4LjA5OC04LjExMS0xOC4wOTgtMTguMDk4czguMDg5LTE4LjA5OCwxOC4wOTgtMTguMDk4YzkuOTY2LDAsMTguMDc2LDguMTMyLDE4LjA3NiwxOC4wOTgNCgkJCVM0MTEuODUxLDE2Mi41MzIsNDAxLjg2NCwxNjIuNTMyeiIvPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K',
        },
        {
          title: 'Tigers',
          color: '#0000FF',
          svg_icon:
            'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTAyLjY2NCA1MDIuNjY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDIuNjY0IDUwMi42NjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojMDEwMDAyOyIgZD0iTTM2My41MzIsNzkuODczYy03Mi45NTIsMTQuNDk2LTY3Ljc1NCw3My44NTgtMTI2LjQwNSw5OC44MTYNCgkJCWMtMjUuOTcxLDExLjAyMy04NS44MDksMTcuNjg4LTkyLjMyMywxNC42MDNjLTM5LjczMy0xOC42OC05OC4xNjktNjUuNDAzLTk4LjE2OS02NS40MDNzNS4yMiwzOC4wNTEsMjUuNTgzLDcwLjkwMw0KCQkJQzI0LjYxMiwxODcuNTMzLDAsMTYzLjE3OSwwLDE2My4xNzlzMzEuNTM2LDI3NC43NjksMjQ2Ljc5MSwyNjEuNTAzQzQxMC42LDQxNC42MDgsNDAwLjgyOCwyNjkuNjMxLDQyNy42NjIsMjI3LjQzOA0KCQkJYzI2Ljc5MS00Mi4xMjgsNzUuMDAyLTMzLjM5Miw3NS4wMDItMzMuMzkyUzQ3My4xNzcsNTguMTI5LDM2My41MzIsNzkuODczeiBNNDAxLjg2NCwxNjIuNTMyDQoJCQljLTEwLjAwOSwwLTE4LjA5OC04LjExMS0xOC4wOTgtMTguMDk4czguMDg5LTE4LjA5OCwxOC4wOTgtMTguMDk4YzkuOTY2LDAsMTguMDc2LDguMTMyLDE4LjA3NiwxOC4wOTgNCgkJCVM0MTEuODUxLDE2Mi41MzIsNDAxLjg2NCwxNjIuNTMyeiIvPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K',
        },
      ],
    }
  },
}
</script>
