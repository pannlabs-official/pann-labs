import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  type = 'button',
  fullWidth = false,
  ...props
}) {
  const className = `${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''}`;

  const renderContent = () => (
    <>
      <span className={styles.corners}>
        <span className={styles.cornerTR} />
        <span className={styles.cornerBL} />
      </span>
      <span className={styles.inner}>
        {children}
        {icon && <span className={styles.icon}>{icon}</span>}
      </span>
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>
          {renderContent()}
        </a>
      );
    }
    return (
      <Link href={href} className={className} {...props}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick} {...props}>
      {renderContent()}
    </button>
  );
}
