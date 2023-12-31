import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { UserDocument } from '../../../../apps/auth/src/users/models/user.schema';

const getCurrentUserByContext = (context: ExecutionContext): UserDocument => {
  const request = context.switchToHttp().getRequest();
  return request.user;
};

export const CurrentUser = createParamDecorator(
  (data, context: ExecutionContext) => getCurrentUserByContext(context),
);
