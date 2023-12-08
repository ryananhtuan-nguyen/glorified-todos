import { ACTION, AuditLog } from '@prisma/client'

export const generateLogMessage = (log: AuditLog) => {
  const { action, entityTitle, entityType } = log

  switch (action) {
    case ACTION.CREATE:
      return `created ${entityTitle.toLowerCase()} "${entityTitle}"`
    case ACTION.UPDATE:
      return `updated ${entityTitle.toLowerCase()} "${entityTitle}"`
    case ACTION.DELETE:
      return `deleted ${entityTitle.toLowerCase()} "${entityTitle}"`
    default:
      return `unknown action ${entityTitle.toLowerCase()} "${entityTitle}"`
  }
}
