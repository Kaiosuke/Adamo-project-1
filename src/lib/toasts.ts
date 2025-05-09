import { toast } from 'sonner'

const toastSuccess = ({ content }: { content: string }) => {
  return toast.success(`${content} Successfully`, {
    style: {
      backgroundColor: '#4caf50',
      color: '#ffffff'
    }
  })
}

const toastFailed = ({ content }: { content: string | Error }) => {
  return toast.error(`${content}`, {
    style: {
      backgroundColor: '#FF0B55',
      color: '#ffffff'
    }
  })
}

const toastFailedWithNotice = ({ content }: { content: string }) => {
  return toast.error(`${content} Successfully`, {
    style: {
      backgroundColor: '#FF0B55',
      color: '#ffffff'
    }
  })
}

const toastWarring = ({ content }: { content: string }) => {
  return toast.success(`${content}`, {
    style: {
      backgroundColor: '#FE7743',
      color: '#ffffff'
    }
  })
}

export { toastSuccess, toastFailed, toastFailedWithNotice, toastWarring }
