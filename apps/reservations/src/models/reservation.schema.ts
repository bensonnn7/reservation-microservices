import { AbstractDocument } from '@app/common';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class ReservationDocument extends AbstractDocument {
  @Prop()
  timestamp: Date;
  @Prop()
  userId: string;
  @Prop()
  placeId: string;
  @Prop()
  invoiceId: string;
  @Prop()
  startDate: Date;
  @Prop()
  endDate: Date;
}
export const ReservationSchema =
  SchemaFactory.createForClass(ReservationDocument);
