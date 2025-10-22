# Takahiro Hatanaka's Portfolio

Next.jsで構築された個人ポートフォリオサイトです。

## 技術スタック

- **Next.js 15** - React フレームワーク
- **TypeScript** - 型安全な開発
- **Bun** - 高速なJavaScriptランタイム&パッケージマネージャー
- **Biome** - 高速なリンター&フォーマッター
- **Tailwind CSS** - ユーティリティファーストCSSフレームワーク
- **shadcn/ui** - 再利用可能なコンポーネントライブラリ
- **Zod** - TypeScript優先のスキーマバリデーション

## セットアップ

依存関係のインストール:

```bash
bun install
```

## 開発

開発サーバーの起動:

```bash
bun run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

## ビルド

プロダクションビルドの作成:

```bash
bun run build
```

ビルド後のファイルは `out` ディレクトリに生成されます。

## リント&フォーマット

コードのチェック:

```bash
bun run lint
```

コードの自動修正:

```bash
bun run lint:fix
```

コードのフォーマット:

```bash
bun run format
```

## プロジェクト構成

```
nextjs/
├── app/              # Next.js App Router
│   ├── layout.tsx    # ルートレイアウト
│   ├── page.tsx      # ホームページ
│   └── globals.css   # グローバルスタイル
├── components/       # Reactコンポーネント
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── SkillList.tsx
│   ├── TheTitle.tsx
│   └── Skills/
│       └── Item.tsx
├── public/           # 静的ファイル
├── lib/              # ユーティリティ関数
└── ...設定ファイル
```

## デプロイ

このプロジェクトは静的エクスポートに対応しています (`output: "export"`)。
`out` ディレクトリの内容を任意の静的ホスティングサービスにデプロイできます。
