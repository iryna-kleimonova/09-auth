import css from '@/components/Footer/Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Iryna Kleimonova</p>
          <p>
            Contact me:
            <a href="mailto:irynakleimonova@gmail.com">
              irynakleimonova@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
