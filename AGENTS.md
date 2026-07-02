# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

## Commands

Yarn 1 を使用する。`yarn.lock` を使うため、`npm` や別の lockfile は追加しない。

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

## Coding Conventions

- 小さく焦点の合った Vue Single File Component を優先する。
- 既存の Options API スタイルに合わせる。明確な理由がない限り別パターンを導入しない。
- レイアウトや見た目の調整は Tailwind utility class を優先する。
- scoped SCSS は、Tailwind で表しにくいコンポーネント固有のスタイルに限定する。
- シンプルな静的ポートフォリオサイトなので、明示的に必要な場合を除き、新しい依存関係・ルーティング・大きな抽象化を追加しない。
- 既存のコンパクトでテキスト中心のレイアウトとレスポンシブ挙動を維持する。

## Verification

コード変更後は原則として以下を実行する。

```bash
yarn build
```

開発サーバーの挙動に影響する変更では、必要に応じて以下も実行し、`http://localhost:3000` で確認する。

```bash
yarn dev
```
