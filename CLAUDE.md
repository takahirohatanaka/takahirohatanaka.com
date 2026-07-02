# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn install        # 依存パッケージのインストール
yarn dev            # 開発サーバー起動 (http://localhost:3000)
yarn build          # プロダクションビルド (.output/ に出力)
yarn start          # ビルド済みサーバーの起動

docker compose up   # Docker で開発サーバーを起動
```

lint・テストのスクリプトは未設定。

## Architecture

**Nuxt 3** ベースのシングルページ個人ポートフォリオサイト。`pages/` ディレクトリは存在せず、ルーティングなし。`app.vue` がルートで、4つのコンポーネントを縦に並べる構成。

```
app.vue
  ├── TheTitle    # アイコン画像 + 名前ヘッダー
  ├── About       # 自己紹介テキスト
  ├── SkillList   # スキル一覧 (SkillsItem = components/Skills/Item.vue を v-for でレンダリング)
  └── Contact     # GitHub / SNS / メールアドレスリンク
```

- **スタイリング**: Tailwind CSS v3 + SCSS (`sass`)。`assets/css/tailwind.css` で Tailwind を読み込み、`assets/css/fonts.css` でフォント定義。コンポーネントの `<style lang="scss" scoped>` も使用可。
- **GTM**: `plugins/gtm.ts` で `@gtm-support/vue-gtm` を初期化 (ID: GTM-PVJKJQW)。
- **コンポーネント自動インポート**: Nuxt 3 の規約により `components/` 配下は自動インポートされる。
- **パッケージマネージャー**: Yarn 1 (corepack 経由)。`yarn.lock` を使用するため `npm` は使わない。
