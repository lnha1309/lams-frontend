# LAMS - London Academy of Management and Sciences

Website chính thức của London Academy of Management and Sciences (LAMS), được xây dựng với Next.js.

## Yêu cầu hệ thống

- Node.js 18.x trở lên
- npm, yarn, pnpm hoặc bun

## Cài đặt

1. Clone repository:

```bash
git clone <repository-url>
cd lams.ac
```

2. Cài đặt dependencies:

```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

## Chạy project

### Development mode

Chạy development server:

```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để xem website.

### Build production

Build project cho production:

```bash
npm run build
# hoặc
yarn build
# hoặc
pnpm build
```

### Chạy production server

Sau khi build, chạy production server:

```bash
npm start
# hoặc
yarn start
# hoặc
pnpm start
```

## Cấu trúc project

```
lams.ac/
├── app/                    # Next.js App Router
│   ├── components/         # React components (Header, Footer)
│   ├── undergraduate/      # Trang các chương trình cử nhân
│   ├── postgraduate/       # Trang các chương trình thạc sĩ
│   ├── doctorate/          # Trang các chương trình tiến sĩ
│   ├── about-us/           # Trang giới thiệu
│   ├── contact-us/         # Trang liên hệ
│   ├── news-events/        # Trang tin tức
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Trang chủ
│   └── globals.css         # Global styles
├── public/                 # Static assets
│   ├── _images/            # Hình ảnh
│   └── _resources/         # CSS, JS, và các tài nguyên khác
└── package.json            # Dependencies và scripts
```

## Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build project cho production
- `npm start` - Chạy production server
- `npm run lint` - Chạy ESLint để kiểm tra code

## Công nghệ sử dụng

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Bootstrap 5** - CSS framework
- **Tailwind CSS** - Utility-first CSS
